using DB.Model;
using Falcon.Tools.DBHandler;

namespace DB.Handler;

public class StudentHandler:DBHandler<StudentHandler>, IStudentHandler
{
  #region Public Constructors

  public StudentHandler(Action<DBSetting> option) : base(option)
  {
  }

  #endregion Public Constructors

  #region Public Methods

  public bool CheckStudentId(string studentId)
  {
    const string sqlQuery = """
            Exec CheckStudentId
                @StudentId=@1;
            """;
    return SqlFirstOrDefault<bool>(sqlQuery,c => c.Add(studentId));
  }

  public IList<TblMajor> GetMajors()
        => SqlList<TblMajor>("SELECT * FROM tblMajor");

  public IList<TblState> GetStates()
      => SqlList<TblState>("SELECT * FROM tblState");

  public TblStudent GetStudent(Guid id)
      => SqlFirstOrDefault<TblStudent>("SELECT * FROM tblStudent WHERE Id = @1",c => c.Add(id));

  public IList<VwStudent> GetStudents()
  {
    const string sqlQuery = """
      SELECT St.*,MajorCode=M.Code,StateCode=S.Code FROM tblStudent St
      Left Join tblMajor M On M.Id=St.MajorId
      Left Join tblState S On S.Id=St.StateId
      """;
    return SqlList<VwStudent>(sqlQuery);
  }

  #endregion Public Methods

  #region Protected Methods

  protected override void ModelBuilder(Builder builder) => _ = new ModelBuilder(builder);

  #endregion Protected Methods
}
