import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DumpsterFire icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DumpsterFire = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDumpsterFire} {...props} />;
};

export default DumpsterFire;
