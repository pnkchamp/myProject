package com.miniProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
		 @RequestMapping("/")
	    public String index(Model model) {
			model.addAttribute("title", "miniProject");
	        return "Login/Login";
		}
		
		@RequestMapping("1")
	    public String Form(Model model) {
			model.addAttribute("title", "miniProject");
	        return "Form/Form";
	    }	
}
