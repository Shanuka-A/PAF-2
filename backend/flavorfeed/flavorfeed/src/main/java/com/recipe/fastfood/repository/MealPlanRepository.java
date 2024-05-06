package com.recipe.fastfood.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.recipe.fastfood.entity.MealPlan;

@Repository
public interface MealPlanRepository extends MongoRepository<MealPlan, String> {

}
