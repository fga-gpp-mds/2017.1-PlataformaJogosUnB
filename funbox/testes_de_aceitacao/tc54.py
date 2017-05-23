# -*- coding: utf-8 -*-
from selenium import selenium
import unittest, time, re

class tc54(unittest.TestCase):
    def setUp(self):
        self.verificationErrors = []
        self.selenium = selenium("localhost", 4444, "*chrome", "http://10.10.10.10:3000/")
        self.selenium.start()
    
    def test_tc54(self):
        sel = self.selenium
        sel.open("/admin/auth/user/add/")
        sel.type("id=id_username", "usuario")
        sel.type("id=id_username", "usuario")
        sel.click("name=_save")
        sel.click("name=_save")
        sel.wait_for_page_to_load("30000")
    
    def tearDown(self):
        self.selenium.stop()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
