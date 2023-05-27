using Falcon.Tools.DBHandler;

namespace DB.Model;

public class TblMajor
{
  #region Public Properties
  public string Code { get; set; }
  public string Desc { get; set; }
  public int Id { get; set; }
  public string Name { get; set; }
  #endregion Public Properties

  #region Internal Methods

  internal static TblMajor Cast(Record rec) => new()
  {
    Code = rec.To<string>("Code"),
    Desc = rec.To<string>("Desc"),
    Id = rec.To<int>("Id"),
    Name = rec.To<string>("Name"),
  };

  #endregion Internal Methods
}
