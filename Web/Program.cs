namespace Web;

internal static class Program
{
  #region Private Methods

  private static IHostBuilder CreateHostBuilder() => Host.CreateDefaultBuilder()
.ConfigureWebHostDefaults(builder => builder.UseStartup<Startup>());

  private static Task Main() => CreateHostBuilder().Build().RunAsync();

  #endregion Private Methods
}
