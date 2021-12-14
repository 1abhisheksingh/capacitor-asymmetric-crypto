import Foundation

@objc public class AsymmetricCrypto: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
