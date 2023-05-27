using System.Text.Json;
using DB.Model;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers; [Route("Home")]
public class HomeController:Controller
{
  #region Private Fields
  #region Private Fields
  private static readonly JsonSerializerOptions _JsonSetting = new() { PropertyNamingPolicy = null,};
  private static readonly IHomeWorker _Worker = new HomeWorker();
  #endregion Private Fields
  #endregion Private Fields

  #region Public Methods
  #region Public Methods

  [HttpPost, Route("CheckStudentId")]
  public IActionResult CheckStudentId([FromBody] string studentId) => JsonPascal(_Worker.CheckStudentId(studentId));

  [HttpPost, Route("GetMajors")]
  public IActionResult GetMajors() => JsonPascal(_Worker.GetMajors());

  [HttpPost, Route("GetStates")]
  public IActionResult GetStates() => JsonPascal(_Worker.GetStates());

  public IActionResult Index() => PartialView("index");

  [HttpPost, Route("StudentAdd")]
  public IActionResult StudentAdd([FromBody] TblStudent student) => JsonPascal(_Worker.AddStudent(student));

  [HttpPost, Route("StudentDelete")]
  public IActionResult StudentDelete([FromBody] TblStudent student) => JsonPascal(_Worker.DeleteStudent(student));

  [HttpPost, Route("StudentGetAll")]
  public IActionResult StudentGetAll() => JsonPascal(_Worker.GetAllStudents());

  [HttpPost, Route("StudentUpdate")]
  public IActionResult StudentUpdate([FromBody] TblStudent student) => JsonPascal(_Worker.UpdateStudent(student));

  [HttpPost, Route("Test")]
  public IActionResult Test() => JsonPascal(Environment.CurrentDirectory);

  #endregion Public Methods
  #region Private Methods

  private JsonResult JsonPascal(object data) => Json(data,_JsonSetting);

  #endregion Private Methods
  #endregion Public Methods
}
