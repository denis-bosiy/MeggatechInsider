import React from "react";
import TypesContracts from "./view/typesContracts/TypesContracts";
import CategoriesTeachers from "./view/categoriesTeachers/CategoriesTeachers";
import TeacherEducation from "./view/teacherEducation/TeacherEducation";
import CommonBlock from "./view/common/CommonBlock";
import "./TeacherSettingsPage.scss";

const TeacherSettingsPage = () => {
  return (
    <div className="teacher-settings">
      <CommonBlock title={"Типы договоров"} content={<TypesContracts />} />
      <CommonBlock title={"Категории преподавателей"} content={<CategoriesTeachers />} />
      <CommonBlock title={"Образование преподавателей"} content={<TeacherEducation />} />
    </div>
  );
};

export default TeacherSettingsPage;
