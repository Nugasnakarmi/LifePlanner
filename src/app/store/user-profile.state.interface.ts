import { UserPreferences } from 'src/app/interfaces/user-preferences.interface';

export interface UserProfileState {
  profile: UserPreferences | null;
  loading: boolean;
  saving: boolean;
  error: string | null;
}
