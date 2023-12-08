FROM hseeberger/scala-sbt:17.0.1_1.6.2_3.1.1

# Copy the project files to the container
COPY . .

EXPOSE 9000

# Start the Play application
CMD ["sbt", "run"]