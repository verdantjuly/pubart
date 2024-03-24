package health

type HealthStatus struct {
	Status bool `json:"status"`
}

func Health() HealthStatus {
	healthStatus := HealthStatus{
		Status: true,
	}
	return healthStatus
}
