using Falcon.Tools.DBHandler;

namespace DB.Model;

public class TblState
{
  #region Public Properties
  public string Code { get; set; }
  public int Id { get; set; }
  public string State { get; set; }
  #endregion Public Properties

  #region Internal Methods

  internal static TblState Cast(Record rec) => new()
  {
    Id = rec.To<int>("Id"),
    Code = rec.To<string>("Code"),
    State = rec.To<string>("State"),
  };

  #endregion Internal Methods
}
