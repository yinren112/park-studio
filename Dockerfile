FROM python:3.12-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 LAILIN_HOST=0.0.0.0 LAILIN_PORT=8767
WORKDIR /app
RUN groupadd --system --gid 10001 park && useradd --system --uid 10001 --gid park park && mkdir -p /app/data && chown park:park /app/data
COPY --chown=park:park server.py catalog.json lailin-park-preview.html ./
COPY --chown=park:park src/seed.json ./src/seed.json
USER park
VOLUME ["/app/data"]
EXPOSE 8767
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8767/health',timeout=4).read()"
CMD ["python", "server.py"]
