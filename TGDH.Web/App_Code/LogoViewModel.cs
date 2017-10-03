using Umbraco.Core.Models;

public class LogoViewModel
{
    public int LogoId { get; set; }

    public string Name { get; set; }

    public string Link { get; set; }

    public int ImageWidth { get; set; }

    public string ModifierClass { get; set; }

    public LogoViewModel()
    {
        ImageWidth = 200;
    }
}
