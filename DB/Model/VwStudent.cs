using Falcon.Tools.DBHandler;

namespace DB.Model;

public class VwStudent:TblStudent
{
  #region Public Properties
  public string MajorCode { get; set; }
  public string StateCode { get; set; }
  #endregion Public Properties

  #region Public Methods

  public static new VwStudent Cast(Record rec) => new()
  {
    Id = rec.To<Guid>("Id"),
    FirstName = rec.To<string>("FirstName"),
    GPA = rec.To<float>("GPA"),
    LastName = rec.To<string>("LastName"),
    MajorId = rec.To<int>("MajorId"),
    MajorCode = rec.To<string>("MajorCode"),
    StateCode = rec.To<string>("StateCode"),
    StateId = rec.To<int>("StateId"),
    Status = rec.To<string>("Status"),
    StudentId = rec.To<string>("StudentId"),
  };

  #endregion Public Methods
}
