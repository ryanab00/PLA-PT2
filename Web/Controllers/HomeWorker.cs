using DB.Handler;
using DB.Model;
using Falcon.Tools.DBHandler;

namespace Web.Controllers;

public class HomeWorker:IHomeWorker
{
  #region Private Fields
  private readonly IStudentHandler _Handler = new StudentHandler(SetConnectionToFile);
  #endregion Private Fields

  #region Public Methods

  public TblStudent AddStudent(TblStudent student)
  {
    //student.Id = GuidTools.GetGuid();
    _Handler.Add(student);
    return student;
  }

  public bool CheckStudentId(string studentId) => _Handler.CheckStudentId(studentId);

  public TblStudent DeleteStudent(TblStudent student)
  {
    _Handler.Delete(student);
    return student;
  }

  public IList<VwStudent> GetAllStudents() => _Handler.GetStudents();

  public IList<TblMajor> GetMajors() => _Handler.GetMajors();

  public IList<TblState> GetStates() => _Handler.GetStates();

  public TblStudent UpdateStudent(TblStudent student)
  {
    _Handler.Update(student);
    return student;
  }

  #endregion Public Methods

  #region Private Methods

  private static void SetConnectionToFile(DBSetting o)
  {
    var fileName = Path.GetFullPath("..\\Tools\\DB\\StudentRecord.mdf",Environment.CurrentDirectory);
    o.NameOrConnection = $"Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename={fileName};Integrated Security=True;Connect Timeout=30";
  }

  #endregion Private Methods
}
