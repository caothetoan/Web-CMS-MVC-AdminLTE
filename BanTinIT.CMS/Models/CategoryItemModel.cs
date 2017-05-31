using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BanTinIT.CMS.Models
{
    public class CategoryItemModel
    {
        public int Id { get; set; }
        private string _title;

        public string Title
        {
            get { return _title; }
            set { _title = value; }
        }

        private string _description = string.Empty;

        public string Description
        {
            get { return _description; }
            set { _description = value; }
        }
        public string SeName { get; set; }

        private int _orderNumber;

        public int OrderNumber
        {
            get { return _orderNumber; }
            set { _orderNumber = value; }
        }

        private int _parentId;

        public int ParentId
        {
            get { return _parentId; }
            set { _parentId = value; }
        }
        private byte _status;

        public byte Status
        {
            get { return _status; }
            set { _status = value; }
        }
    }
}