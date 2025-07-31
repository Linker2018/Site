import requests
import sys
from datetime import datetime

class PulsTokenAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, expected_data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            
            print(f"   Status Code: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check response data if provided
                if expected_data:
                    try:
                        response_json = response.json()
                        print(f"   Response: {response_json}")
                        
                        # Validate expected data fields
                        for key, expected_value in expected_data.items():
                            if key in response_json:
                                if response_json[key] == expected_value:
                                    print(f"   ✅ {key}: {response_json[key]} (matches expected)")
                                else:
                                    print(f"   ⚠️  {key}: {response_json[key]} (expected: {expected_value})")
                            else:
                                print(f"   ❌ Missing field: {key}")
                    except Exception as e:
                        print(f"   ⚠️  Could not parse JSON response: {e}")
                else:
                    try:
                        response_json = response.json()
                        print(f"   Response: {response_json}")
                    except:
                        print(f"   Response (text): {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text

        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection Error: Could not connect to {url}")
            print("   Make sure the backend server is running on the correct port")
            return False, {}
        except requests.exceptions.Timeout:
            print(f"❌ Failed - Timeout: Request took too long")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_endpoint(self):
        """Test the health check endpoint"""
        expected_data = {
            "status": "healthy",
            "message": "$PULS Token API is running"
        }
        return self.run_test(
            "Health Check Endpoint",
            "GET",
            "api/health",
            200,
            expected_data
        )

    def test_token_info_endpoint(self):
        """Test the token info endpoint"""
        expected_data = {
            "name": "PULS Token",
            "symbol": "$PULS",
            "contract_address": "0xCAAE2A2F939F51d97CdFa9A86e79e3F085b799f3"
        }
        return self.run_test(
            "Token Info Endpoint",
            "GET",
            "api/token-info",
            200,
            expected_data
        )

    def test_root_endpoint(self):
        """Test the root endpoint"""
        expected_data = {
            "message": "Welcome to $PULS Token API"
        }
        return self.run_test(
            "Root Endpoint",
            "GET",
            "",
            200,
            expected_data
        )

def main():
    print("🚀 Starting $PULS Token API Tests")
    print("=" * 50)
    
    # Setup
    tester = PulsTokenAPITester("http://localhost:8001")
    
    # Run all tests
    print("\n📡 Testing Backend API Endpoints...")
    
    # Test health endpoint
    tester.test_health_endpoint()
    
    # Test token info endpoint  
    tester.test_token_info_endpoint()
    
    # Test root endpoint
    tester.test_root_endpoint()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results:")
    print(f"   Tests Run: {tester.tests_run}")
    print(f"   Tests Passed: {tester.tests_passed}")
    print(f"   Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed! Backend API is working correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Please check the backend implementation.")
        return 1

if __name__ == "__main__":
    sys.exit(main())