public class ImageComparisonViewModel
{
    public int BeforeImageId { get; set; }

    public int AfterImageId { get; set; }

    public int ImageWidth { get; set; }

    public ImageComparisonViewModel()
    {
        ImageWidth = 600;
    }
}
