using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebSiteAPI.Models;

namespace WebSiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserInfoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select id,Name,Age,Email,Password,Gender from dbo.UserInfo";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebSiteConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(UserInfo user)
        {
            string query = @"insert into dbo.UserInfo values (@Name,@Age,@Email,@Password,@Gender)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebSiteConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Name", user.Name);
                    myCommand.Parameters.AddWithValue("@Age", user.Age);
                    myCommand.Parameters.AddWithValue("@Email", user.Email);
                    myCommand.Parameters.AddWithValue("@Password", user.Password);
                    myCommand.Parameters.AddWithValue("@Gender", user.Gender);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Kişi Başarıyla Yüklendi.");
        }

        [HttpPut]
        public JsonResult Put(UserInfo user)
        {
            string query = @"update dbo.UserInfo set Name = @Name, Age = @Age, Email = @Email, Password = @Password, Gender = @Gender where id = @id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebSiteConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", user.id);
                    myCommand.Parameters.AddWithValue("@Name", user.Name);
                    myCommand.Parameters.AddWithValue("@Age", user.Age);
                    myCommand.Parameters.AddWithValue("@Email", user.Email);
                    myCommand.Parameters.AddWithValue("@Password", user.Password);
                    myCommand.Parameters.AddWithValue("@Gender", user.Gender);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Kişi Başarıyla Düzenlendi.");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.UserInfo where id = @id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebSiteConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Kişi Başarıyla Silindi.");
        }
    }
}