FROM eclipse-temurin:17-jdk-jammy
ENV TZ Europe/Paris

EXPOSE 8080

ARG JAR_FILE=./spring-boot3-crud-application/target/*.jar
COPY ${JAR_FILE} spring-boot3-crud-application.jar


RUN install -d -m 0755 -o 2020 -g 0 /gc && \
    install -d -m 0755 -o 2020 -g 0 /dump


CMD java ${JAVA_ARGS} ${JAVA_OPTS} -jar /spring-boot3-crud-application.jar
