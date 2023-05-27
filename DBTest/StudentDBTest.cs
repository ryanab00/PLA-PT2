using DB.Handler;
using DB.Model;
using Falcon.Tools.DBHandler;

namespace DBTest
{
  public class StudentDBTest
  {
    #region Private Fields
    private readonly IStudentHandler _Handler = new StudentHandler(SetConnectionToFile);
    #endregion Private Fields

    #region Public Methods

    [Test]
    public void Add()
    {
      var Student = new TblStudent()
      {
        StudentId = $"Test{DateTime.Now:HHmmssfff}",
        FirstName = "DELETED",
        LastName = "TEST",
        Status = "D",
        StateId = 5,
        MajorId = 1,
        GPA = 2.73f,
      };

      _Handler.Add(Student);
    }

    [Test]
    public void CheckId()
    {
      var StudentId = "Fixed123";
      var Student = new TblStudent()
      {
        StudentId = StudentId,
        FirstName = "Fixed",
        LastName = "TEST",
        Status = "A",
        StateId = 5,
        MajorId = 1,
        GPA = 2.73f,
      };

      _Handler.Add(Student);
      Thread.Sleep(10);
      var Result = _Handler.CheckStudentId(StudentId);
      Assert.IsTrue(Result);
      Result = _Handler.CheckStudentId("RANDOM");
      Assert.IsFalse(Result);
      _Handler.Delete(Student);
    }

    [Test]
    public void MajorTest()
    {
      var x = _Handler.GetMajors();
      Assert.IsTrue(x.Count > 0);
      Assert.That(x.FirstOrDefault(c => c.Code == "LGL")?.Name,Is.EqualTo("Legal Studies"));
    }

    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void StatesTest()
    {
      var x = _Handler.GetStates();
      Assert.IsTrue(x.Count == 50);
      Assert.That(x.FirstOrDefault(c => c.Code == "IL")?.State,Is.EqualTo("Illinois"));
    }

    [Test]
    public void StudentInsert()
    {
      var Student = new TblStudent()
      {
        StudentId = $"Test{DateTime.Now:HHmmssfff}",
        FirstName = "First",
        LastName = "Last",
        Status = "A",
        StateId = 1,
        MajorId = 2,
      };

      _Handler.Add(Student);
      var Student2 = _Handler.GetStudent(Student.Id);
      Assert.That(Student.Id,Is.EqualTo(Student2.Id));
      _Handler.Delete(Student);
      Thread.Sleep(10);
      var Student3 = _Handler.GetStudent(Student.Id);
      Assert.That(Student3,Is.Null);
    }

    [Test]
    public void StudentUpdate()
    {
      var Student = new TblStudent()
      {
        StudentId = $"Test{DateTime.Now:HHmmssfff}",
        FirstName = "First",
        LastName = "Last",
        Status = "A",
        StateId = 1,
        MajorId = 2,
      };

      _Handler.Add(Student);
      var Student2 = _Handler.GetStudent(Student.Id);
      Student2.FirstName = "Updated";
      _Handler.Update(Student2);
      Thread.Sleep(10);
      var Student3 = _Handler.GetStudent(Student2.Id);
      Assert.That(Student3.FirstName,Is.EqualTo("Updated"));
      Thread.Sleep(10);
      _Handler.Delete(Student3);
    }

    #endregion Public Methods
    #region Private Methods

    private static void SetConnectionToFile(DBSetting o)
    {
      var fileName = Path.GetFullPath("..\\..\\..\\..\\Tools\\DB\\StudentRecord.mdf",Environment.CurrentDirectory);
      o.NameOrConnection = $"Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename={fileName};Integrated Security=True;Connect Timeout=30";
      o.Log = Console.WriteLine;
    }

    #endregion Private Methods
  }
}
