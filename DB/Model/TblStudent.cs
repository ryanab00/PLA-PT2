using Falcon.Tools.DBHandler;

namespace DB.Model;

public class TblStudent:EntityGuid
{
  #region Public Properties
  public string FirstName { get; set; }
  public float GPA { get; set; }
  public string LastName { get; set; }
  public int MajorId { get; set; }
  public int StateId { get; set; }
  public string Status { get; set; }
  public string StudentId { get; set; }
  #endregion Public Properties

  #region Public Methods

  public static TblStudent Cast(Record rec) => new()
  {
    Id = rec.To<Guid>("Id"),
    FirstName = rec.To<string>("FirstName"),
    GPA = rec.To<float>("GPA"),
    LastName = rec.To<string>("LastName"),
    MajorId = rec.To<int>("MajorId"),
    StateId = rec.To<int>("StateId"),
    Status = rec.To<string>("Status"),
    StudentId = rec.To<string>("StudentId"),
  };

  #endregion Public Methods
}
