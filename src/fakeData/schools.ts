export interface Manager {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    school_manager_id: number | null;
    statusId: number;
}

export interface School {
    id: number;
    school_unique_id: string;
    school_name: string;
    school_address: string;
    school_lat: number;
    school_lng: number;
    school_type: "PRIVATE" | "INTERNATIONAL";
    school_manager_id: number;
    school_email: string;
    school_phone: string;
    school_region: string;
    school_city: string;
    school_district: string | null;
    education_level: "PRIMARY" | "INTERMEDIATE";
    curriculum: "SAUDI_NATIONAL" | "BRITISH";
    school_logo: string | null;
    created_at: string;
    updated_at: string;
    manager: Manager;
}

export const schools: School[] = [
    {
        id: 1,
        school_unique_id: "SCH-0001",
        school_name: "Ehtimami International School",
        school_address: "Riyadh, Saudi Arabia",
        school_lat: 24.7136,
        school_lng: 46.6753,
        school_type: "INTERNATIONAL",
        school_manager_id: 1,
        school_email: "contact@ehtimami.edu.sa",
        school_phone: "+966123456789",
        school_region: "Riyadh",
        school_city: "Riyadh",
        school_district: "Al Olaya",
        education_level: "PRIMARY",
        curriculum: "SAUDI_NATIONAL",
        school_logo: null,
        created_at: "2025-02-22T09:14:25.469Z",
        updated_at: "2025-02-22T09:14:25.469Z",
        manager: {
            id: 1,
            firstName: "School",
            lastName: "Manager",
            email: "manager@school.com",
            password: "$2b$10$yzloN6uws50SO2TT8kQh3O88UsoC/pUc/zVLOfXRoLSalWev1VX06",
            createdAt: "2025-02-22T09:14:25.406Z",
            updatedAt: "2025-02-22T09:14:25.406Z",
            school_manager_id: null,
            statusId: 1
        }
    },
    {
        id: 4,
        school_unique_id: "SCH-007",
        school_name: "Test Th Academy Two",
        school_address: "Dammam, Saudi Arabia",
        school_lat: 26.3927,
        school_lng: 49.9777,
        school_type: "PRIVATE",
        school_manager_id: 4,
        school_email: "test3@yopmail.com",
        school_phone: "+971522200731",
        school_region: "Eastern Province",
        school_city: "Dammam",
        school_district: null,
        education_level: "INTERMEDIATE",
        curriculum: "BRITISH",
        school_logo: "https://example.com/logo.png",
        created_at: "2025-02-22T09:34:27.233Z",
        updated_at: "2025-02-22T09:34:27.233Z",
        manager: {
            id: 4,
            firstName: "School",
            lastName: "Manager",
            email: "test3@yopmail.com",
            password: "$2b$10$m3Tyc7LyK2IIAvu5JFVsquX3vSO65Zl/sjmxIeAwwY/Q06gl47z0K",
            createdAt: "2025-02-22T09:34:27.202Z",
            updatedAt: "2025-02-22T09:34:27.202Z",
            school_manager_id: null,
            statusId: 1
        }
    }
];
