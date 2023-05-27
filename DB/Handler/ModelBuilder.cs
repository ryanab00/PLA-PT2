using DB.Model;
using Falcon.Tools.DBHandler;

namespace DB.Handler;

internal class ModelBuilder
{
  #region Private Fields
  private readonly Builder _Builder;

  private readonly IDBHandler _Handler;
  #endregion Private Fields

  #region Public Constructors

  public ModelBuilder(Builder builder)
  {
    _Builder = builder;
    _Handler = _Builder.Handler;
    BuildStudent();
    BuildState();
    BuildMajor();
  }

  #endregion Public Constructors

  #region Private Enums

  private enum EnAction
  {
    Insert = 1,
    Update = 2,
    Delete = 3,
  }

  #endregion Private Enums

  #region Private Methods

  private void BuildMajor()
        => _Builder.Of<TblMajor>()
        .AssignCast(TblMajor.Cast);

  private void BuildState()
      => _Builder.Of<TblState>()
      .AssignCast(TblState.Cast);

  private void BuildStudent()
  {
    const string sqlQuery = """
            Exec spStudent
                @Json=@1,
                @Action=@2;
            """;

    _Builder.Of<TblStudent>()
        .AssignCast(TblStudent.Cast)
        .AssignInsert(StudentAction(EnAction.Insert))
        .AssignUpdate(StudentAction(EnAction.Update))
        .AssignDelete(StudentAction(EnAction.Delete));
    Action<TblStudent> StudentAction(EnAction enAction)
        => c => _Handler.ExecAsync(sqlQuery,p => p.AddJson(c).Add((int)enAction));
  }

  #endregion Private Methods
}
