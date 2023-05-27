using DB.Model;
using Falcon.Tools.DBHandler;

namespace DB.Handler;

public interface IStudentHandler:IDBHandler
{
  #region Public Methods

  bool CheckStudentId(string studentId);

  IList<TblMajor> GetMajors();

  IList<TblState> GetStates();

  TblStudent GetStudent(Guid id);

  IList<VwStudent> GetStudents();

  #endregion Public Methods
}
