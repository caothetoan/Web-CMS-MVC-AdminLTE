using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BanTinIT.CMS.Models
{
    public class NewsViewModel
    {
        public int Id { get; set; }
      
        [Required]
        [StringLength(150, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]        
        [Display(Name = "Tiêu đề")]
        public string Title { get; set; }
        public string Short { get; set; }
        [Required]
        [StringLength(2000, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [Display(Name = "Nội dung")]
        public string Full { get; set; }

        public string Thumb { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public string MetaTitle { get; set; }
        public string SeName { get; set; }

        public int PageView
        {
            get;
            set;
        }
        public bool AllowComments { get; set; }
        public int NumberOfComments { get; set; }
        public DateTime CreatedOn { get; set; }
        public CategoryItemModel CategoryItemModel { get; set; }
    }
}