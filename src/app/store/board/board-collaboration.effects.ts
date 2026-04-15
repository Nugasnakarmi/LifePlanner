import { Injectable, inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, mergeMap, map, catchError, of, switchMap, filter } from 'rxjs';
import { BoardCollaborationApiService } from 'src/app/services/board/board-collaboration.api.service';
import * as collabActions from './board-collaboration.actions';
import * as boardActions from './board.actions';

@Injectable()
export class BoardCollaborationEffects {
  private actions$ = inject(Actions);
  private collabApi = inject(BoardCollaborationApiService);

  loadCollaborators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.loadCollaborators),
      switchMap(({ boardId }) =>
        from(this.collabApi.getCollaborators(boardId)).pipe(
          map((collaborators) =>
            collabActions.loadCollaboratorsSuccess({ collaborators })
          ),
          catchError((error) =>
            of(collabActions.loadCollaboratorsFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  addCollaborator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.addCollaborator),
      mergeMap(({ boardId, userId, role }) =>
        from(this.collabApi.addCollaborator(boardId, userId, role)).pipe(
          map((collaborator) =>
            collaborator
              ? collabActions.addCollaboratorSuccess({ collaborator })
              : collabActions.addCollaboratorFailure({ error: 'Failed to add collaborator' })
          ),
          catchError((error) =>
            of(collabActions.addCollaboratorFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  updateCollaboratorRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.updateCollaboratorRole),
      mergeMap(({ collaboratorId, role }) =>
        from(this.collabApi.updateCollaboratorRole(collaboratorId, role)).pipe(
          map((success) =>
            success
              ? collabActions.updateCollaboratorRoleSuccess({ collaboratorId, role })
              : collabActions.updateCollaboratorRoleFailure({ error: 'Failed to update role' })
          ),
          catchError((error) =>
            of(collabActions.updateCollaboratorRoleFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  removeCollaborator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.removeCollaborator),
      mergeMap(({ collaboratorId }) =>
        from(this.collabApi.removeCollaborator(collaboratorId)).pipe(
          map((success) =>
            success
              ? collabActions.removeCollaboratorSuccess({ collaboratorId })
              : collabActions.removeCollaboratorFailure({ error: 'Failed to remove collaborator' })
          ),
          catchError((error) =>
            of(collabActions.removeCollaboratorFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  respondToInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.respondToInvitation),
      mergeMap(({ collaboratorId, accept }) =>
        from(this.collabApi.respondToInvitation(collaboratorId, accept)).pipe(
          map((success) =>
            success
              ? collabActions.respondToInvitationSuccess({ collaboratorId, accepted: accept })
              : collabActions.respondToInvitationFailure({ error: 'Failed to respond to invitation' })
          ),
          catchError((error) =>
            of(collabActions.respondToInvitationFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  loadPendingInvitations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.loadPendingInvitations),
      switchMap(() =>
        from(this.collabApi.getPendingInvitations()).pipe(
          map((pendingInvitations) =>
            collabActions.loadPendingInvitationsSuccess({ pendingInvitations })
          ),
          catchError((error) =>
            of(collabActions.loadPendingInvitationsFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  sendInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.sendInvitation),
      mergeMap(({ boardId, email, role }) =>
        from(this.collabApi.sendInvitation(boardId, email, role)).pipe(
          map((invitation) =>
            invitation
              ? collabActions.sendInvitationSuccess({ invitation })
              : collabActions.sendInvitationFailure({ error: 'Failed to send invitation' })
          ),
          catchError((error) =>
            of(collabActions.sendInvitationFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  loadInvitations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.loadInvitations),
      switchMap(({ boardId }) =>
        from(this.collabApi.getInvitations(boardId)).pipe(
          map((invitations) =>
            collabActions.loadInvitationsSuccess({ invitations })
          ),
          catchError((error) =>
            of(collabActions.loadInvitationsFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  revokeInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.revokeInvitation),
      mergeMap(({ invitationId }) =>
        from(this.collabApi.revokeInvitation(invitationId)).pipe(
          map((success) =>
            success
              ? collabActions.revokeInvitationSuccess({ invitationId })
              : collabActions.revokeInvitationFailure({ error: 'Failed to revoke invitation' })
          ),
          catchError((error) =>
            of(collabActions.revokeInvitationFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  acceptInvitationByToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.acceptInvitationByToken),
      mergeMap(({ token }) =>
        from(this.collabApi.acceptInvitationByToken(token)).pipe(
          mergeMap((result) => {
            if (result.success && result.board_id != null) {
              return [
                collabActions.acceptInvitationByTokenSuccess({ boardId: result.board_id }),
                boardActions.loadBoards(),
              ];
            }
            return [
              collabActions.acceptInvitationByTokenFailure({
                error: result.error ?? 'Failed to accept invitation',
              }),
            ];
          }),
          catchError((error) =>
            of(
              collabActions.acceptInvitationByTokenFailure({
                error: error?.message ?? String(error),
              })
            )
          )
        )
      )
    )
  );

  // ── Pending email invitations (invitee-facing) ──────────

  loadPendingEmailInvitations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.loadPendingEmailInvitations),
      switchMap(() =>
        from(this.collabApi.getMyPendingEmailInvitations()).pipe(
          map((invitations) =>
            collabActions.loadPendingEmailInvitationsSuccess({ invitations })
          ),
          catchError((error) =>
            of(collabActions.loadPendingEmailInvitationsFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  respondToEmailInvitation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.respondToEmailInvitation),
      mergeMap(({ invitationId, accept }) =>
        from(this.collabApi.respondToEmailInvitation(invitationId, accept)).pipe(
          mergeMap((result) => {
            if (result.success) {
              const actions: Action[] = [
                collabActions.respondToEmailInvitationSuccess({
                  invitationId,
                  accepted: accept,
                  boardId: result.board_id,
                }),
              ];
              if (accept) {
                actions.push(boardActions.loadBoards());
              }
              return actions;
            }
            return [collabActions.respondToEmailInvitationFailure({
              error: result.error ?? 'Failed to respond to invitation',
            })];
          }),
          catchError((error) =>
            of(collabActions.respondToEmailInvitationFailure({ error: error?.message ?? String(error) }))
          )
        )
      )
    )
  );

  /** Reload boards after accepting a direct collaboration invitation. */
  reloadBoardsAfterDirectAccept$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collabActions.respondToInvitationSuccess),
      filter(({ accepted }) => accepted),
      map(() => boardActions.loadBoards())
    )
  );

  /** Reload pending invitations when boards are loaded successfully.
   *  This ensures users see new invitations when navigating to boards page. */
  reloadInvitationsAfterBoardsLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.loadBoardsSuccess),
      mergeMap(() => [
        collabActions.loadPendingInvitations(),
        collabActions.loadPendingEmailInvitations(),
      ])
    )
  );
}
