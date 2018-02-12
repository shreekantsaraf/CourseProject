using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactAppDataSource.Controllers
{
    [Produces("application/json")]
    [Route("api/Temp")]
    public class TempController : Controller
    {
        // GET: api/Temp
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Temp/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Temp
        [HttpPost]
        public void Post([FromBody]string id, string first_name,string last_name, string email, string subject, string description)
        {
            string id1 = id;
            string first_name1 = first_name;
            string last_name1 = last_name;
            string email1 = email;
            string subject1 = subject;
            string description1 = description;
            string w1 = id1;
        }
        
        // PUT: api/Temp/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
