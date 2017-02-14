public class ImageViewModel
{
    public int ImageId { get; set; }

    public string Alignment { get; set; }

    public string AspectRatio { get; set; }

    public string AdditionalClass { get; set; }

    public int ImageWidth { get; set; }

    public ImageViewModel()
    {
        ImageWidth = 500;
    }
}
