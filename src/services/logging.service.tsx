// services/logging.service.ts

export const LoggingService = async (buttonClicked: string): Promise<void> => {
  // Prepare data in JSON format
  const body = JSON.stringify({ buttonClicked });

  try {
    // Make API POST request
    const response = await fetch('https://m1jp17h33i.execute-api.eu-west-2.amazonaws.com/default/LinkSelection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('API Response:', data);
  } catch (error) {
    console.error('API Error:', error);
  }
};
