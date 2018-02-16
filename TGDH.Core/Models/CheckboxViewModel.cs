public class CheckboxViewModel
{
    public int Id { get; set; }

    public string Label { get; set; }

    public string Name { get; set; }
    
    public bool IsRequired { get; set; }

    public bool IsDisabled { get; set; }
    
    public bool IsChecked { get; set; }

    public string ModifierClass { get; set; }
}