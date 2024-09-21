

export interface Pose {
  id: number;
  category_name: string;
  difficulty_level: string;
  english_name: string;
  sanskrit_name_adapted?: string;
  sanskrit_name?: string;
  translation_name?: string;
  pose_benefits: string;
  url_svg: string;
}

export type Poses = Pose[];

export interface Category {
  id: string;
  category_name: string;
  category_description: string;
  poses: Pose[];
}

export type Categories<t> = t[];


