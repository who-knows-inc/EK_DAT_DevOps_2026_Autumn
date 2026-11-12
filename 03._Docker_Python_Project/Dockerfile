FROM python
RUN addgroup --system appuser && \
    adduser --system --ingroup appuser --home /home/appuser appuser
    
# Install uv from the official release
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

WORKDIR /usr/src/app
COPY . .

RUN chown -R appuser:appuser /usr/src/app

USER appuser
EXPOSE 8080
CMD ["uv", "run", "main.py"]