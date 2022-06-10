using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace HipOrSkip.Pages;

public class QuestionModel : PageModel
{
    private readonly ILogger<QuestionModel> _logger;

    public QuestionModel(ILogger<QuestionModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}

