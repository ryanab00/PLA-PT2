using DB.Model;

namespace Web.Controllers;

public interface IHomeWorker
{
  #region Public Methods

  TblStudent AddStudent(TblStudent student);

  bool CheckStudentId(string studentId);

  TblStudent DeleteStudent(TblStudent student);

  IList<VwStudent> GetAllStudents();

  IList<TblMajor> GetMajors();

  IList<TblState> GetStates();

  TblStudent UpdateStudent(TblStudent student);

  #endregion Public Methods
}
