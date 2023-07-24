import { mdiPackageVariantClosed } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A PackageVariantClosed icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const PackageVariantClosed = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiPackageVariantClosed} {...props} />;
};

export default PackageVariantClosed;
