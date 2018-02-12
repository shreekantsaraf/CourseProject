using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactAppDataSource.Models;

namespace ReactAppDataSource.Repositories
{
    //[Produces("application/json")]
    [Route("api/Contacts")]
    public class ContactsController : Controller
    {
        IContactsRepository _contactsRepo;
        public ContactsController(IContactsRepository contactsRepo)
        {
            _contactsRepo = contactsRepo;
        }

        // GET: api/Contacts
        [HttpGet]
        public IEnumerable<Contact> GetContacts()
        {
            return _contactsRepo.GetAll();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public Contact GetContact(string id)
        {
            return _contactsRepo.Get(id);
        }
        
        // POST: api/Contacts
        [HttpPost]
        public void PostContact(Contact c)
        {
            _contactsRepo.Post(c);
        }
        
        // PUT: api/Contacts/5
        [HttpPut("{id}")]
        public void Put(string id, Contact c)
        {
            _contactsRepo.Put(id, c);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _contactsRepo.Delete(id);
        }
    }
}
