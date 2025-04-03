export interface User {
id?: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  roles?: string[];
  is_verified?: boolean;
  school?: School;
  profile?: UserProfile;
  classes?: any[]; // Update this with a proper Class type if needed
}

export interface School {
  id: number;
  school_unique_id?: string;
  school_name?: string;
  school_address?: string;
  school_lat?: number;
  school_lng?: number;
  school_type?: string;
  school_email?: string;
  school_phone?: string;
  school_region?: string;
  school_city?: string;
  school_district?: string | null;
  education_level?: string;
  curriculum?: string;
  school_logo?: string;
  created_at?: string;
  updated_at?: string;
  status?: string;
}

export interface UserProfile {
  id: number;
  userId: number;
  bio?: string;
  avatar?: string | null;
  profile_banner?: string | null;
  middleName?: string | null;
  nickname?: string | null;
  occupation?: string | null;
  company?: string | null;
  website?: string | null;
  social_links?: any; // refine to object if needed
  preferences?: any;
  interests?: any;
  marital_status?: string;
  nationality?: string;
  phone?: string | null;
  birth_date?: string | null;
  join_date?: string;
  gender?: number;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  emergency_contacts?: any;
  profile_visibility?: string;
  updatedAt?: string;
  profileId?: number;
}
