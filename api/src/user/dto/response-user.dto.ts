export class ResponseUserDto {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  created_at: string | null;
  updated_at: string | null;
}
