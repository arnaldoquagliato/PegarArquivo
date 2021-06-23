package com.pegaarquivoaq;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class PegaArquivo extends ReactContextBaseJavaModule {
    PegaArquivo(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "PegaArquivo";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("PegaArquivo", "Create event called with name: " + name
                + " and location: " + location);
    }
}

