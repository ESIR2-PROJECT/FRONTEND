FROM maven:3.8.5-openjdk-17 AS prod

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY . .
RUN mvn package
