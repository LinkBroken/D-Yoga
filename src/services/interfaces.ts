export interface Poses
{
    id: number,
    category_name: string,
    difficulty_level: string,
    english_name: string,
    sanskrit_name_adapted?: string,
    sanskrit_name?: string,
    translation_name?: string,
    pose_benefits: string,
    url_svg: string,
  };

export interface Categories<t> {
    id: string,
    category_name: string,
    category_description: string,
    poses: t[],
}


