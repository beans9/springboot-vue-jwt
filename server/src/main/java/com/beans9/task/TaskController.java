package com.beans9.task;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;
	
	@PostMapping
	public void addTask(@RequestBody Task task) {
		taskRepository.save(task);
	}
	
	@GetMapping
	public List<Task> getTask(){
		return taskRepository.findAll();
	}
	
	@PutMapping("/{id}")
	public void editTask(@PathVariable long id, @RequestBody Task task) {
		// Optional<Task> existngTask = taskRepository.findOne(id);
		Task existTask = taskRepository.findOneById(id);
		Assert.notNull(existTask , "Task not found");
		existTask.setDescription(task.getDescription());
		taskRepository.save(existTask);
	}
	
	@DeleteMapping("/{id}")	
	public void deleteTask(@PathVariable long id) {
		taskRepository.deleteById(id);
	}
}
