# AI Chat Interface Component

A configurable AI chat component that can be easily integrated with various AI APIs.

## Features

- **API Integration**: Support for OpenAI, custom APIs, or mock responses
- **Configurable**: Extensive configuration options for different use cases
- **Error Handling**: Built-in error handling with retry functionality
- **Typing Indicators**: Optional typing animation while AI is responding
- **Message Status**: Track message status (sending, sent, error)
- **Custom Styling**: Consistent with the app's design system
- **Responsive**: Works on all screen sizes

## Basic Usage

```tsx
import AIChatInterface, { AIChatConfig } from '@/components/AIChatInterface';

const MyComponent = () => {
  const config: AIChatConfig = {
    welcomeMessage: "Hello! How can I help you?",
    placeholder: "Type your message here...",
    enableTyping: true,
    enableRetry: true
  };

  return (
    <div className="h-96">
      <AIChatInterface config={config} />
    </div>
  );
};
```

## API Integration

### OpenAI Integration

```tsx
const config: AIChatConfig = {
  apiEndpoint: "https://api.openai.com/v1/chat/completions",
  apiKey: "your-openai-api-key",
  model: "gpt-3.5-turbo",
  systemPrompt: "You are a helpful assistant.",
  maxTokens: 1000,
  temperature: 0.7
};
```

### Custom API Integration

```tsx
const handleSendMessage = async (message: string): Promise<string> => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, context: 'ayurvedic' })
  });
  const data = await response.json();
  return data.response;
};

<AIChatInterface onSendMessage={handleSendMessage} />
```

## Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `apiEndpoint` | string | API endpoint URL for chat completions |
| `apiKey` | string | API key for authentication |
| `model` | string | AI model to use (e.g., 'gpt-3.5-turbo') |
| `systemPrompt` | string | System prompt for the AI |
| `maxTokens` | number | Maximum tokens in response |
| `temperature` | number | Response creativity (0-1) |
| `onMessage` | function | Callback when new message is received |
| `onError` | function | Callback when error occurs |
| `customHeaders` | object | Additional HTTP headers |
| `enableTyping` | boolean | Show typing indicator |
| `enableRetry` | boolean | Enable retry button for failed messages |
| `placeholder` | string | Input placeholder text |
| `welcomeMessage` | string | Initial welcome message |
| `errorMessage` | string | Error message to display |

## Message Interface

```tsx
interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  metadata?: any;
}
```

## Error Handling

The component includes built-in error handling:

- Network errors are caught and displayed
- Failed messages show a retry button (if enabled)
- Custom error messages can be configured
- Error callbacks allow for custom error handling

## Styling

The component uses the app's design system:

- Glass morphism effects
- Consistent color scheme
- Responsive design
- Smooth animations
- Dark/light theme support

## Examples

### Simple Chat

```tsx
<AIChatInterface 
  config={{
    welcomeMessage: "Hi! I'm here to help.",
    placeholder: "Ask me anything..."
  }}
/>
```

### Advanced Configuration

```tsx
<AIChatInterface 
  config={{
    apiEndpoint: "https://api.openai.com/v1/chat/completions",
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4",
    systemPrompt: "You are a knowledgeable Ayurvedic health assistant...",
    maxTokens: 2000,
    temperature: 0.8,
    enableTyping: true,
    enableRetry: true,
    onMessage: (message) => console.log('New message:', message),
    onError: (error) => console.error('Chat error:', error)
  }}
/>
```


