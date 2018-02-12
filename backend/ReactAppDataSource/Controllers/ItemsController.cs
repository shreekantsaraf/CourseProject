using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
namespace ReactAppDataSource
{
    [Route( "api/Items")]
    // [EnableCors("MyPolicy")]
   public class  ItemController : Controller
    {
        [HttpGet("{Id}")]
        public Item Get(int Id)
        {
            Items css = new Items();
            List<Item> cs = css.getAll();
            // Customer c = cs.Where(l => l.Id == 3);
            Item c = cs.First(l => l.Id == Id);
            return c;
        }
        [HttpGet]
        public List<Item> GetAll()
        {
            Items css = new Items();
            List<Item> cs = css.getAll();
            return cs;
        }
    }
}


