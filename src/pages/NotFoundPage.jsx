import Layout from "../layouts/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="mt-12 font-semibold text-center h-screen grid place-content-center">
        <h1 className="text-3xl md:text-8xl font-semibold text-red-500">
          404 Page Not Found
        </h1>
        <p className="mt-4 md:mt-10 capitalize text-base md:text-2xl opacity-50 italic">
          something went wrong...
        </p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
