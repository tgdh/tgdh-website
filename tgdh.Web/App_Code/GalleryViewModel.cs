public class GalleryViewModel
{
    public string MediaIds { get; set; }

    public string Alignment { get; set; }

    public string AspectRatio { get; set; }

    public string AdditionalClass { get; set; }

    public int ImageWidth { get; set; }

    public string WrapClasses { get; set; }

    public GalleryViewModel()
    {
        ImageWidth = 1000;
    }
}
