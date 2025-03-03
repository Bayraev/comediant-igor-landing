
const SubscriptionForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          ПОДПИШИТЕСЬ НА РАССЫЛКУ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Ваш email"
            className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover-scale"
          >
            Подписаться
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
