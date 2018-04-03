package com.beans9.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<ApplicationUser, Long>{
	ApplicationUser findById(long id);
	ApplicationUser findByUsername(String username);
}
