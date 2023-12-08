FROM hseeberger/scala-sbt:17.0.1_1.6.2_3.1.1

# Copy the project files to the container
COPY . .

# Expose the port the application will run on
EXPOSE 9000

# Start the Play application
CMD ["sbt", "run"]